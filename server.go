package main

import (
	"net/http"

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
	router.LoadHTMLGlob("./Front-End/PersonalWebsite/dist/*.html")
	router.GET("/", GetHome)
	router.Run()
}

