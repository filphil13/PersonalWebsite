package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func GetHome(c *gin.Context) {
	c.JSON(200, nil)
}
// MAIN FUNCTION
func main() {

	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("./Front-End/PersonalWebsite/dist", true)))
	router.GET("/", GetHome)

	router.Run()
}

