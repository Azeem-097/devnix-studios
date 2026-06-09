# ============================================================
# IndexNow URL Submission Script
# Submits URLs to Bing, Yandex, Naver, Seznam (instant indexing)
# Usage: .\scripts\submit-indexnow.ps1
# ============================================================

$ErrorActionPreference = "Stop"

# ─── CONFIGURATION ───────────────────────────────────────────
$apiKey = "78cb162354fad0e9"
$siteHost = "devnixstudios.tech"
$keyLocation = "https://$siteHost/$apiKey.txt"

# ─── ALL URLS TO SUBMIT ──────────────────────────────────────
$urls = @(
    # Main Pages
    "https://devnixstudios.tech/",
    "https://devnixstudios.tech/services",
    "https://devnixstudios.tech/projects",
    "https://devnixstudios.tech/faqs",
    "https://devnixstudios.tech/blog",

    # Service Pages
    "https://devnixstudios.tech/web-development-services",
    "https://devnixstudios.tech/seo-services-pakistan",

    # Legal Pages
    "https://devnixstudios.tech/privacy-policy",
    "https://devnixstudios.tech/terms-of-service",
    "https://devnixstudios.tech/refund-policy",

    # Blog Posts
    "https://devnixstudios.tech/blog/5-reasons-small-business-needs-website-pakistan"
)

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🚀 IndexNow Submission Starting..." -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "📊 Total URLs to submit: $($urls.Count)" -ForegroundColor Yellow
Write-Host "🔑 API Key: $apiKey" -ForegroundColor White
Write-Host "🌐 Site: $siteHost" -ForegroundColor White
Write-Host ""

# ─── VERIFY KEY FILE IS ACCESSIBLE ───────────────────────────
Write-Host "🔍 Verifying key file is accessible..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $keyLocation -UseBasicParsing -ErrorAction Stop
    if ($response.Content.Trim() -eq $apiKey) {
        Write-Host "   ✅ Key file verified at: $keyLocation" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️ Key file content mismatch!" -ForegroundColor Yellow
        Write-Host "   Expected: $apiKey" -ForegroundColor Yellow
        Write-Host "   Got: $($response.Content.Trim())" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Key file NOT accessible!" -ForegroundColor Red
    Write-Host "   Make sure your site is deployed first." -ForegroundColor Red
    Write-Host "   Expected URL: $keyLocation" -ForegroundColor Red
    Write-Host ""
    Write-Host "   Deploy your site (git push) and run this script again." -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# ─── PREPARE REQUEST BODY ────────────────────────────────────
$body = @{
    host = $siteHost
    key = $apiKey
    keyLocation = $keyLocation
    urlList = $urls
} | ConvertTo-Json -Depth 10

# ─── SUBMIT TO INDEXNOW API ──────────────────────────────────
$endpoints = @(
    @{ Name = "IndexNow (Bing/Yandex)"; Url = "https://api.indexnow.org/indexnow" },
    @{ Name = "Bing Direct"; Url = "https://www.bing.com/indexnow" },
    @{ Name = "Yandex Direct"; Url = "https://yandex.com/indexnow" }
)

$successCount = 0
$failCount = 0

foreach ($endpoint in $endpoints) {
    Write-Host "📤 Submitting to: $($endpoint.Name)..." -ForegroundColor Yellow

    try {
        $response = Invoke-RestMethod `
            -Uri $endpoint.Url `
            -Method Post `
            -Body $body `
            -ContentType "application/json; charset=utf-8" `
            -ErrorAction Stop

        Write-Host "   ✅ SUCCESS - All $($urls.Count) URLs submitted" -ForegroundColor Green
        $successCount++
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        if ($statusCode -eq 200 -or $statusCode -eq 202) {
            Write-Host "   ✅ SUCCESS (Status: $statusCode)" -ForegroundColor Green
            $successCount++
        } elseif ($statusCode -eq 400) {
            Write-Host "   ❌ Bad Request - Check URLs format" -ForegroundColor Red
            $failCount++
        } elseif ($statusCode -eq 403) {
            Write-Host "   ❌ Forbidden - Key verification failed" -ForegroundColor Red
            $failCount++
        } elseif ($statusCode -eq 422) {
            Write-Host "   ❌ Invalid URLs or domain mismatch" -ForegroundColor Red
            $failCount++
        } elseif ($statusCode -eq 429) {
            Write-Host "   ⚠️ Too many requests - wait and retry later" -ForegroundColor Yellow
            $failCount++
        } else {
            Write-Host "   ❌ FAILED - Status: $statusCode" -ForegroundColor Red
            Write-Host "      Error: $($_.Exception.Message)" -ForegroundColor Red
            $failCount++
        }
    }

    Start-Sleep -Milliseconds 500
}

# ─── SUMMARY ─────────────────────────────────────────────────
Write-Host ""
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "📊 SUBMISSION SUMMARY" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Successful submissions: $successCount" -ForegroundColor Green
Write-Host "❌ Failed submissions: $failCount" -ForegroundColor Red
Write-Host "📑 Total URLs per submission: $($urls.Count)" -ForegroundColor White
Write-Host "🎯 Total URL submissions: $($successCount * $urls.Count)" -ForegroundColor Cyan
Write-Host ""

if ($successCount -gt 0) {
    Write-Host "🎉 URLs submitted to search engines!" -ForegroundColor Green
    Write-Host ""
    Write-Host "⏰ Expected indexing time:" -ForegroundColor Yellow
    Write-Host "   • Bing: 24-48 hours" -ForegroundColor White
    Write-Host "   • Yandex: 1-3 days" -ForegroundColor White
    Write-Host "   • DuckDuckGo: 2-3 days (uses Bing data)" -ForegroundColor White
    Write-Host "   • Yahoo: 2-3 days (uses Bing data)" -ForegroundColor White
    Write-Host ""
    Write-Host "🔍 Verify indexing:" -ForegroundColor Yellow
    Write-Host "   • Bing: https://www.bing.com/search?q=site:devnixstudios.tech" -ForegroundColor White
    Write-Host "   • Yandex: https://yandex.com/search/?text=site%3Adevnixstudios.tech" -ForegroundColor White
} else {
    Write-Host "⚠️ All submissions failed. Check:" -ForegroundColor Yellow
    Write-Host "   1. Site is deployed and live" -ForegroundColor White
    Write-Host "   2. Key file accessible at: $keyLocation" -ForegroundColor White
    Write-Host "   3. Internet connection is working" -ForegroundColor White
}

Write-Host ""
