package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	// Routes
	e.GET("/", hello)
	e.GET("/api/system/info", getSystemInfo)

	// Start server
	e.Logger.Fatal(e.Start(":8080"))
}

// Handler
func hello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, Nebula NAS OS!")
}

func getSystemInfo(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{
		"os":      "Nebula NAS OS",
		"version": "v0.1.0-alpha",
		"kernel":  "6.6.0-lts",
	})
}
