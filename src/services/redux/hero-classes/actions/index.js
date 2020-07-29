export const HERO_CLASSES_LOADED = "HERO_CLASSES_LOADED";

export const heroClassesLoaded = (heroClasses) => ({
  type: HERO_CLASSES_LOADED,
  payload: heroClasses,
});
