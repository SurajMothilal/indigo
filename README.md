# INDIGO PHOTO GALLERY

A simple image gallery

## REQUIREMENTS

* Get the images from a data source. Fetch the sample JSON data from https://picsum.photos/v2/list (see https://picsum.photos/ for
  general info)
* Use this data and for each item display the image, author, dimensions (e.g., in the format “1000x500” if the width and height are 1000
  and 500 respectively), and link to the image’s raw URL (download_url). Apply some minimal design/layout where it makes sense to
  you.
* When you click on an item then a pop-up should appear informing you that you're leaving the page. Include a way to hide the overlay
  and cancel the action. Also include a way to disable this overlay entirely for all clicks, if the user wishes.

## APP OVERVIEW AND GENERAL APPROACH

- This app is primarily built using React JS version 17.0.1.

- For the photo gallery, I opted to use the `react-photo-gallery` library which provides a nice, modern and responsive image gallery. For reference visit https://github.com/neptunian/react-photo-gallery
- For the toggle switch, I opted to use the `react-toggle` library which provides a simple toggle. For reference visit https://github.com/aaronshaf/react-toggle
- For the laoding spinner while the list is being fetched, I've used `react-loader-spinner`. For reference visit https://github.com/mhnpd/react-loader-spinner

- The data source for this exercise is at `https://picsum.photos/v2/list` which returns a list of images

## GETTING STARTED

- Ensure you have npm installed ( version 12.16.3 )
- Run `npm install` to install packages at the root level
- Run `npm start`
- The app is exposed at `http://localhost:3000/`

## THINGS TO IMPROVE AS NEXT STEPS

- I noticed the image text on the images are cramped when the images are too small in width. As next steps it will be nice to workout a better place/layout for the image text.
- For images with a white background, the text on the image is hard to see.
- Will need to handle the scenario of the endless spinner when the fetch does not resolve.
- Add error handling
- Add storybook
- Add tests

