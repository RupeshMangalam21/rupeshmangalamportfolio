declare module '@fortawesome/react-fontawesome' {
    import { IconProp } from '@fortawesome/fontawesome-svg-core';
    import * as React from 'react';
  
    export interface FontAwesomeIconProps {
      icon: IconProp;
      className?: string;
      // Add any other props you use
    }
  
    export const FontAwesomeIcon: React.ComponentType<FontAwesomeIconProps>;
  }
  
  declare module '@fortawesome/free-brands-svg-icons' {
    export const faGithub: IconProp;
    export const faInstagram: IconProp;
    export const faTwitter: IconProp;
    export const faLinkedin: IconProp;
    export const faCodepen: IconProp;
  }
  