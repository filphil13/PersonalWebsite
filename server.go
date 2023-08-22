package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

// MAIN FUNCTION
func main() {

	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("/PersonalWebsite", true)))


	//FRONT-END ENDPOINTS

	router.Run()
}

//
//
//
//
//
