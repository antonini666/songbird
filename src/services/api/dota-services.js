class DotaService {
  _apiBaseUrl = "https://api.jsonbin.io/b/5f214069c1edc4661760aa4b";

  getResource = async () => {
    const res = await fetch(this._apiBaseUrl);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBaseUrl}, received ${res.status}`
      );
    }
    return await res.json();
  };

  getHeroClasses = async () => {
    const res = await this.getResource();
    return Object.keys(res);
  };

  getStrengthHeroes = async () => {
    const res = await this.getResource();
    return res.strength;
  };

  getIntelligenceHeroes = async () => {
    const res = await this.getResource();
    return res.intelligence;
  };

  getAgilityHeroes = async () => {
    const res = await this.getResource();
    return res.agility;
  };

  getRangeHeroes = async () => {
    const res = await this.getResource();
    return res.range;
  };

  getMeleeHeroes = async () => {
    const res = await this.getResource();
    return res.melee;
  };

  getRandomHeroes = async () => {
    const res = await this.getResource();
    return res.random;
  };
}

export { DotaService };
