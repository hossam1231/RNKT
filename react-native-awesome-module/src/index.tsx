export { PersonalPageHeaderWithMultipleActions } from './header/PersonalPageHeaderWithMultipleActions';

export { HorizontalDoubleCardListWithMultipleMetaText } from './list/HorizontalDoubleCardListWithMultipleMetaText';

export { SimpleCalendarDatePicker } from './calendar/SimpleCalendarDatePicker';

export { SocialNetworkDetailedScreen } from './detail/SocialNetworkDetailedScreen';
export { CarRentalDetailedScreen } from './detail/CarRentalDetailedScreen';
export { TaskManagementDetailedScreen } from './detail/TaskManagementDetailedScreen';

export { StaticWelcomePageWithHeroImage } from './landing/StaticWelcomePageWithHeroImage';

export { SimpleEmptyState } from './empty/SimpleEmptyState';
export { ModernEmptyStateWithMultipleActions } from './empty/ModernEmptyStateWithMultipleActions';

export { ModernAndMinimalisticSettingsPageWithLightActions } from './pages/ModernAndMinimalisticSettingsPageWithLightActions';

export { ToggleButtonGroupWithTextAndIconTabs } from './pages/ToggleButtonGroupWithTextAndIconTabs';

export { FormBuilder } from './form/builder';

export {
  SimpleFooterWithSingleAction,
  SimpleFooterWithMultipleActions,
} from './footer';

export { XStack, YStack, Center, Baseline } from './components/stack';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
