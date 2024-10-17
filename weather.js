class Weather {
  constructor(city, state) {
    this.apiKey = "3510e6ac13ecf329fb804991d1ae3e8c";
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    const responseData = await result.json();

    if (responseData.cod === "404") return null;

    responseData.location = { city: this.city, state: this.state };

    return responseData;
  }

  changeWeather(city, state) {
    if (city === "" || state === "") return;

    this.city = city;
    this.state = state;

    const sessionManager = new SessionManager();

    sessionManager.setLocationData(this.city, this.state);
  }
}
