export interface QuickRefItem {
  action: { en: string; zh: string };
  command: string;
  type: 'command' | 'link';
  url?: string;
}

export const quickRefItems: QuickRefItem[] = [
  {
    action: { en: 'Install (macOS / Linux)', zh: '安装 (macOS / Linux)' },
    command: 'curl -fsSL https://claude.ai/install.sh | bash',
    type: 'command',
  },
  {
    action: { en: 'Install (Windows PS)', zh: '安装 (Windows PS)' },
    command: 'irm https://claude.ai/install.ps1 | iex',
    type: 'command',
  },
  {
    action: { en: 'Install (Homebrew)', zh: '安装 (Homebrew)' },
    command: 'brew install --cask claude-code',
    type: 'command',
  },
  {
    action: { en: 'Install (WinGet)', zh: '安装 (WinGet)' },
    command: 'winget install Anthropic.ClaudeCode',
    type: 'command',
  },
  {
    action: { en: 'Launch', zh: '启动' },
    command: 'claude',
    type: 'command',
  },
  {
    action: { en: 'Check status', zh: '检查状态' },
    command: '/status',
    type: 'command',
  },
  {
    action: { en: 'Log out', zh: '登出' },
    command: '/logout',
    type: 'command',
  },
  {
    action: { en: 'OpenRouter keys', zh: 'OpenRouter 密钥' },
    command: 'openrouter.ai/settings/keys',
    type: 'link',
    url: 'https://openrouter.ai/settings/keys',
  },
  {
    action: { en: 'OpenRouter credits', zh: 'OpenRouter 余额' },
    command: 'openrouter.ai/credits',
    type: 'link',
    url: 'https://openrouter.ai/credits',
  },
  {
    action: { en: 'Usage dashboard', zh: '使用量仪表盘' },
    command: 'openrouter.ai/activity',
    type: 'link',
    url: 'https://openrouter.ai/activity',
  },
];
