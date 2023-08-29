package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func GetHome(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"content": "This is an index page...",
	})
}
// MAIN FUNCTION
func main() {

	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("Front-End/PersonalWebsite/dist", true)))
	router.Run()
}

