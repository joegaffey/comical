  var schema = {
    "title": "Comic Schema",
    "type": "object",
    "properties": {
      "title": {
        "type": "string"
      },
      "layout": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "panels": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "image": {
              "type": "string"
            },
            "placement": {
              "type": "string"
            },
            "caption": {
              "type": "string"
            }
          },
          "required": ["placement", "image"]
        }
      },
    },
    "required": ["layout", "panels"]
  };