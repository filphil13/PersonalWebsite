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
	router.Use(static.Serve("/", static.LocalFile("./Front-End/Temperature-Monitor/dist/index.html", true)))


	//FRONT-END ENDPOINTS

	router.Run()
}

//
//
//
//
//
