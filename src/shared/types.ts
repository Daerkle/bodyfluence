export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface AchievementType {
  icon: JSX.Element;
  title: string;
  value: string;
  unit: string;
}

export interface FeatureType {
  title: string;
  description: string;
  imagePath: string;
}

export interface ServiceType {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
