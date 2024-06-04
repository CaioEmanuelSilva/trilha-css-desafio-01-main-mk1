// Test case 1: Simulate a click on the theme toggle when the root element has white background color
document.documentElement.style.setProperty('--background-color', 'white');
themeToggle.click();
// Expected result: The root element should have dark mode styles applied

// Test case 2: Simulate a click on the theme toggle when the root element has dark background color
document.documentElement.style.setProperty('--background-color', '#333');
themeToggle.click();
// Expected result: The root element should have light mode styles applied

// Test case 3: Simulate multiple clicks on the theme toggle
document.documentElement.style.setProperty('--background-color', 'white');
themeToggle.click();
themeToggle.click();
themeToggle.click();
// Expected result: The root element should toggle between dark and light mode styles

// Test case 4: Simulate a click on the theme toggle when the root element has a custom background color
document.documentElement.style.setProperty('--background-color', 'red');
themeToggle.click();
// Expected result: The root element should toggle between dark and light mode styles, ignoring the custom background color

// Test case 5: Simulate a click on the theme toggle when the root element has no background color set
document.documentElement.style.removeProperty('--background-color');
themeToggle.click();
// Expected result: The root element should toggle between dark and light mode styles, using the default background color