import { lazy } from 'react';

// Lazy load components with proper error handling
export const LazyAbout = lazy(() => 
  import('./components/About').catch(error => {
    console.error('Error loading About component:', error);
    return { default: () => <div>Error loading content</div> };
  })
);

export const LazySkills = lazy(() => 
  import('./components/Skills').catch(error => {
    console.error('Error loading Skills component:', error);
    return { default: () => <div>Error loading content</div> };
  })
);

export const LazyProjects = lazy(() => 
  import('./components/Projects').catch(error => {
    console.error('Error loading Projects component:', error);
    return { default: () => <div>Error loading content</div> };
  })
);

export const LazyTimeline = lazy(() => 
  import('./components/Timeline').catch(error => {
    console.error('Error loading Timeline component:', error);
    return { default: () => <div>Error loading content</div> };
  })
);

export const LazyAchievements = lazy(() => 
  import('./components/Achievements').catch(error => {
    console.error('Error loading Achievements component:', error);
    return { default: () => <div>Error loading content</div> };
  })
);

export const LazyInterest = lazy(() => 
  import('./components/Interest').catch(error => {
    console.error('Error loading Interest component:', error);
    return { default: () => <div>Error loading content</div> };
  })
);

export const LazyContact = lazy(() => 
  import('./components/Contact').catch(error => {
    console.error('Error loading Contact component:', error);
    return { default: () => <div>Error loading content</div> };
  })
);