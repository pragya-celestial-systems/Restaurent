const sessionManager = new SessionManager();
const weatherData = sessionManager.getLocationData();
const weather = new Weather(weatherData.city, weatherData.state);
const ui = new UI();

// Event Listeners
document.addEventListener("DOMContentLoaded", getWeather);
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeWeather(city, state);

  getWeather();

  $("#locModal").modal("hide");
});

function getWeather() {
  weather.getWeather().then((weather) => {
    if (Boolean(weather)) {
      ui.setWeather(weather);
    } else {
      document.getElementById("error-message").textContent =
        "City or State Not Found";

      setTimeout(
        () => (document.getElementById("error-message").textContent = ""),
        2500
      );
    }
  });
}
