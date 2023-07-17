# Responsive Side Bar

This attempts to be a working example of a realistic sidebar navigation panel
without relying on any specifc framework.

It applies a simple header element with left sidebar and centre content region.
Reasonably standard starting point for many dashboards and SPA applications.

![Example of the sidebar showing vertical scrollbar](/images/scollbar-example.png?raw=true)

## Overview

The basic grid structure was generated at https://layout.bradwoods.io/ with the
foundation for the sidebar borrowing heavily from CodingNepal's
[Responsive Side Navigation Bar in HTML CSS & JavaScript](https://www.codingnepalweb.com/responsive-side-navigation-bar-in-html-css-javascript/)
blog post dated April 14 2021.

The [CodingNepal](https://www.codingnepalweb.com/) example has been extended to
work inside the fixed left sidebar. With the following modifications:

-   Added custom vertical scroll bar to the link region

The sidebar and it's internal scroll behaviour has been made to work in the same
fashion as the sidebar in Azure Dev Ops.

## Requirements

To make the scrollbar hide when the sidebar is collapsed it does require a browser that supports Webkit (see Roadmap).

## Roadmap

-   Collapse the left sidebar into a nav dropdown in the header at smaller screen widths.
- Add alternative support for browsers that don't support Webkit.

## References/Credits

-   CSS Layout Generator: https://layout.bradwoods.io/

-   CodingNepal:
    https://www.codingnepalweb.com/responsive-side-navigation-bar-in-html-css-javascript/
