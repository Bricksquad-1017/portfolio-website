# GitHub Copilot Chat

- Extension Version: 0.20.3 (prod)
- VS Code: vscode/1.93.1
- OS: Mac

## Network Status

User Settings:

```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  },
  "newSetting": "value"
```

- Extension Version: 0.20.3 (prod)
- VS Code: vscode/1.93.1
- OS: Mac

## Network

User Settings:

```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  },
  "newSetting": "value"
```

$SELECTION_PLACEHOLDER$Connecting to <https://api.github.com>:

- DNS Lookup: 140.82.116.6
- Electron Fetcher (configured): HTTP 200
- Node Fetcher: HTTP 200
- Helix Fetcher: HTTP 200

Connecting to [https://api.githubcopilot.com/_ping](https://api.githubcopilot.com/_ping):

- DNS Lookup: 140.82.112.21
- Electron Fetcher (configured): HTTP 200
- Node Fetcher: HTTP 200
- Helix Fetcher: HTTP 200

## Firewall Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).

## Additional Features

### Proxy Configuration

If you are behind a proxy, configure the proxy settings in your VS Code settings:

```json
  "http.proxy": "http://your-proxy-url:port",
  "http.proxyStrictSSL": false
```

### Custom Keybindings

You can customize keybindings for GitHub Copilot suggestions:

```json
  {
    "key": "ctrl+enter",
    "command": "github.copilot.generate",
    "when": "editorTextFocus && !editorReadonly"
  }
```

### Disabling Copilot for Specific Languages

To disable GitHub Copilot for specific languages, add the following to your settings:

```json
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": false
  }
```

### Logging

Enable logging for troubleshooting:

```json
  "github.copilot.logging.level": "debug"
```

### Inline Suggestions

Enable inline suggestions for a more integrated experience:

```json
  "github.copilot.inlineSuggest.enable": true
```

Connecting to <https://api.github.com>:

- DNS Lookup: 140.82.116.6
- Electron Fetcher (configured): HTTP 200
- Node Fetcher: HTTP 200
- Helix Fetcher: HTTP 200

Connecting to [https://api.githubcopilot.com/_ping](https://api.githubcopilot.com/_ping):

- DNS Lookup: 140.82.112.21
- Electron Fetcher (configured): HTTP 200
- Node Fetcher: HTTP 200
- Helix Fetcher: HTTP 200

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
