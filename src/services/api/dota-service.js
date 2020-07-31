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

  getAllHero = async () => {
    const res = await this.getResource();
    return res;
  };
}

export { DotaService };
