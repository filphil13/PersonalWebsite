package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func GetHome(c *gin.Context) {
	c.JSON(200,nil)
}

// MAIN FUNCTION
func main() {

	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("./PersonalWebsite/dist", true)))


	//FRONT-END ENDPOINTS
	router.GET("/home", GetHome)
	router.GET("/", GetHome)

	router.Run()
}

//
//
//
//
//
