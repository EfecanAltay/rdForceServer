param (
    [string]$ModuleName
)

if (-not $ModuleName) {
    Write-Host "Kullanım: .\create-module.ps1 ModuleName"
    exit
}

$capitalized = ($ModuleName.Substring(0,1).ToUpper()) + $ModuleName.Substring(1)
$basePath = "src/domains/$ModuleName"

New-Item -ItemType Directory -Path $basePath -Force

New-Item -ItemType File -Path "$basePath/routes/$ModuleName.routes.js" -Force -Value "// routes for $ModuleName"
New-Item -ItemType File -Path "$basePath/controllers/$ModuleName.controller.js" -Force -Value "// controller for $ModuleName"
New-Item -ItemType File -Path "$basePath/services/${capitalized}Service.js" -Force -Value "// service for $capitalized"
New-Item -ItemType File -Path "$basePath/factories/${capitalized}Factory.js" -Force -Value "// factory for $capitalized"
New-Item -ItemType File -Path "$basePath/models/${capitalized}.js" -Force -Value "// model for $capitalized"
New-Item -ItemType File -Path "$basePath/repositories/${capitalized}Repository.js" -Force -Value "// repository for $capitalized"

Write-Host "`u{1F4A9} '$ModuleName' modulu olusturuldu: $basePath"