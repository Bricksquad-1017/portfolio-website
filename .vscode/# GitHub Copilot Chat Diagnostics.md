<!-- @format -->

# GitHub Copilot Chat Diagnostics

- **Extension Version**: 0.20.3 (prod)
- **VS Code Version**: 1.93.1
- **Operating System**: macOS

## User Settings

```json
{
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
}
```

Connecting to [https://api.github.com](https://api.github.com):

- DNS Lookup: 140.82.116.6
- Electron Fetcher (configured): HTTP 200
- Node Fetcher: HTTP 200
- Helix Fetcher: HTTP 200

Connecting to [https://api.githubcopilot.com/\_ping](https://api.githubcopilot.com/_ping):

- DNS Lookup: 140.82.113.21
- Electron Fetcher (configured): HTTP 200
- Node Fetcher: HTTP 200
- Helix Fetcher: HTTP 200

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).

## Recent Changes

- Updated the extension version to 0.20.3.
- Added advanced user settings for fetcher configuration.
- Verified connectivity to GitHub API endpoints using different fetchers.
- Included a link to troubleshooting firewall settings for corporate networks.
