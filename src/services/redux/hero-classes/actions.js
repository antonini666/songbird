export const HERO_CLASSES_LOADED = "HERO_CLASSES_LOADED";
export const INCREMENT_STEP = "INCREMENT_STEP";

export const heroClassesLoaded = (heroClasses) => ({
  type: HERO_CLASSES_LOADED,
  payload: heroClasses,
});

export const incrementStep = () => ({
  type: INCREMENT_STEP,
});
