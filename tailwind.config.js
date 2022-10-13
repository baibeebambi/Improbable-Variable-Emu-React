module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "SixUnits": "96px",
        "HalfUnit": "8px",
        "FiveUnits": "80px",
        "TwoUnits": "32px",
        "OneAndHalfUnits": "24px",
        "ThreeUnits": "48px",
        "Unit": "16px",
        "FourUnits": "64px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius8": "8px",
        "Round": "50%",
        "Radius2": "2px"
      },
      "scale": {
        "Small": "48px",
        "XLarge": "192px",
        "XSmall": "16px",
        "Medium": "96px",
        "MaxWidth": "1400px",
        "XXLarge": "288px",
        "Large": "144px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}