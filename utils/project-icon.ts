// icons.ts
import {
  RiHomeLine,
  RiUserLine,
  RiSearchLine,
  RiSettingsLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiCloseLine,
  RiMenuLine,
  RiCheckLine,
  RiDeleteBinLine,
  RiEditLine,
  RiSaveLine,
  RiAddLine,
  RiSubtractLine,
  RiInformationLine,
  RiQuestionLine,
  RiAlertLine,
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiFileLine,
  RiFolderLine,
  RiDownloadLine,
  RiUploadLine,
} from '@remixicon/react';

// Define available size options
type IconSize = 'sm' | 'md' | 'lg';

export const ICONS = {
  // Navigation
  home: { sm: RiHomeLine, md: RiHomeLine, lg: RiHomeLine },
  user: { sm: RiUserLine, md: RiUserLine, lg: RiUserLine },
  search: { sm: RiSearchLine, md: RiSearchLine, lg: RiSearchLine },
  settings: { sm: RiSettingsLine, md: RiSettingsLine, lg: RiSettingsLine },
  
  // Arrows
  arrowRight: { sm: RiArrowRightLine, md: RiArrowRightLine, lg: RiArrowRightLine },
  arrowLeft: { sm: RiArrowLeftLine, md: RiArrowLeftLine, lg: RiArrowLeftLine },
  arrowUp: { sm: RiArrowUpLine, md: RiArrowUpLine, lg: RiArrowUpLine },
  arrowDown: { sm: RiArrowDownLine, md: RiArrowDownLine, lg: RiArrowDownLine },
  
  // Actions
  close: { sm: RiCloseLine, md: RiCloseLine, lg: RiCloseLine },
  menu: { sm: RiMenuLine, md: RiMenuLine, lg: RiMenuLine },
  check: { sm: RiCheckLine, md: RiCheckLine, lg: RiCheckLine },
  delete: { sm: RiDeleteBinLine, md: RiDeleteBinLine, lg: RiDeleteBinLine },
  edit: { sm: RiEditLine, md: RiEditLine, lg: RiEditLine },
  save: { sm: RiSaveLine, md: RiSaveLine, lg: RiSaveLine },
  add: { sm: RiAddLine, md: RiAddLine, lg: RiAddLine },
  subtract: { sm: RiSubtractLine, md: RiSubtractLine, lg: RiSubtractLine },
  
  // Status
  info: { sm: RiInformationLine, md: RiInformationLine, lg: RiInformationLine },
  question: { sm: RiQuestionLine, md: RiQuestionLine, lg: RiQuestionLine },
  alert: { sm: RiAlertLine, md: RiAlertLine, lg: RiAlertLine },
  
  // Account
  mail: { sm: RiMailLine, md: RiMailLine, lg: RiMailLine },
  lock: { sm: RiLockLine, md: RiLockLine, lg: RiLockLine },
  eye: { sm: RiEyeLine, md: RiEyeLine, lg: RiEyeLine },
  eyeOff: { sm: RiEyeOffLine, md: RiEyeOffLine, lg: RiEyeOffLine },
  
  // Files
  file: { sm: RiFileLine, md: RiFileLine, lg: RiFileLine },
  folder: { sm: RiFolderLine, md: RiFolderLine, lg: RiFolderLine },
  download: { sm: RiDownloadLine, md: RiDownloadLine, lg: RiDownloadLine },
  upload: { sm: RiUploadLine, md: RiUploadLine, lg: RiUploadLine },
} as const;

// Type definitions
export type IconName = keyof typeof ICONS;
export type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

// Size mapping
export const ICON_SIZES: Record<IconSize, number> = {
  sm: 16,
  md: 24,
  lg: 32,
} as const;