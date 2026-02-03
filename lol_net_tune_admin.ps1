$ErrorActionPreference = "Continue"
$adapter = "???"
$log = "c:\Users\J\Documents\vscode\lol_net_tune_admin.log"
"=== " + (Get-Date) + " ===" | Out-File -FilePath $log -Encoding ASCII

$desired = @(
  @{Name="??? ???? ???"; Keyword="*EEE"; Value=0},
  @{Name="??? ???"; Keyword="EnableGreenEthernet"; Value=0},
  @{Name="Power Saving Mode"; Keyword="PowerSavingMode"; Value=0},
  @{Name="???? ??"; Keyword="*InterruptModeration"; Value=0},
  @{Name="Large Send Offload v2 (IPv4)"; Keyword="*LsoV2IPv4"; Value=0},
  @{Name="Large Send Offload v2 (IPv6)"; Keyword="*LsoV2IPv6"; Value=0}
)

$results = foreach ($d in $desired) {
  $p = Get-NetAdapterAdvancedProperty -Name $adapter -RegistryKeyword $d.Keyword -ErrorAction SilentlyContinue
  if (-not $p) {
    [pscustomobject]@{Setting=$d.Name; Before=$null; After=$null; Result="NotFound"}
    continue
  }
  $before = $p.RegistryValue -join ','
  try {
    Set-NetAdapterAdvancedProperty -Name $adapter -RegistryKeyword $d.Keyword -RegistryValue $d.Value -ErrorAction Stop
    $after = (Get-NetAdapterAdvancedProperty -Name $adapter -RegistryKeyword $d.Keyword).RegistryValue -join ','
    $res = if ($after -eq "$($d.Value)") {"Changed"} else {"Unchanged"}
  } catch {
    $after = $before
    $res = "Failed: $($_.Exception.Message)"
  }
  [pscustomobject]@{Setting=$d.Name; Before=$before; After=$after; Result=$res}
}

$results | Format-Table -Auto | Out-String | Add-Content -Path $log

try {
  $oldDns = (Get-DnsClientServerAddress -InterfaceAlias $adapter -AddressFamily IPv4).ServerAddresses
  Set-DnsClientServerAddress -InterfaceAlias $adapter -ServerAddresses ("1.1.1.1","1.0.0.1")
  $newDns = (Get-DnsClientServerAddress -InterfaceAlias $adapter -AddressFamily IPv4).ServerAddresses
  "DNS: $($oldDns -join ', ') -> $($newDns -join ', ')" | Add-Content -Path $log
} catch {
  "DNS change failed: $($_.Exception.Message)" | Add-Content -Path $log
}
