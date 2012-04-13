function displayAbout()
{
	visib = document.getElementById("GCS");
	visib.innerHTML="<table width=\"600px\">" +
        	"<tr>" +
                "<td><h2 class=\" \">about</h2></td>" +
            "</tr>" +
        	"<tr>" +
            	"<td>" +
                "Computer Science student at Memorial University of Newfoundland.<br>Hobbyist photographer, musician, and vinyl collector.<br>I love cats and music. I'm a proud Newfoundlander.<br>" +
                "</td>" +
            "</tr>" +
        "</table>";
	return;
}

function displayConnect()
{
		visib = document.getElementById("GCS");
	visib.innerHTML="<table width=\"600px\">" +
        	"<tr>" +
                "<td><h2 class=\" \">social</h2></td>" +
            "</tr>" +
        	"<tr>" +
            	"<td>" +
                "Follow me on <a href=\"http://www.twitter.com/ryanbrushett\">" +
				"twitter" +
				"</a><br />" +
				"Connect with me on <a href=\"http://www.http://ca.linkedin.com/in/ryanbrushett\">"+
				"linkedin" +
				"</a>" +
                "</td>" +
            "</tr>" +
        "</table>";
	return;
}

function displayCode()
{
	visib = document.getElementById("GCS");
	visib.innerHTML="<table width=\"600px\">" +
        	"<tr>" +
                "<td><h2 class=\" \">code</h2></td>" +
            "</tr>" +
        	"<tr>" +
            	"<td>" +
                "Check out my <a href=\"http://www.github.com/ryanbrushett\">" +
				"GitHub" +
                "</a> account</td>" +
            "</tr>" +
        "</table>";
	return;
}