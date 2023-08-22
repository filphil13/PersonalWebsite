package main

import (
	"github.com/gin-gonic/gin"
)

func GetHome(c *gin.Context) {
	c.HTML(200, "index.html", nil)
}

// MAIN FUNCTION
func main() {

	router := gin.Default()
	router.LoadHTMLGlob("./PersonalWebsite/dist/*.html")


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
