package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func GetHome(c *gin.Context) {
	c.HTML(200, "index.html", nil)
}

// MAIN FUNCTION
func main() {

	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("./PersonalWebsite/dist/*.html", true)))
	router.GET("/home", GetHome)
	router.GET("/", GetHome)


	//FRONT-END ENDPOINTS

	router.Run()
}

//
//
//
//
//
