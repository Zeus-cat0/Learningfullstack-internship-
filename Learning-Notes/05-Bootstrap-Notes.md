# Bootstrap 4 Complete Notes

Author: Darpan Ghimire

Repository:
fullstack-development-learning-during-internship

---

# 1. What is Bootstrap?

Bootstrap is a free, open-source front-end framework used to build responsive and mobile-first websites and web applications quickly.

It provides pre-built CSS classes and JavaScript components, allowing developers to create attractive user interfaces without writing everything from scratch.

Bootstrap was originally developed by **Mark Otto** and **Jacob Thornton** at **Twitter** in 2010. Before becoming open source, it was known as **Twitter Blueprint**.

---

# 2. Why Use Bootstrap?

Bootstrap offers many advantages that make web development faster and easier.

## Easy to Learn

Anyone with basic knowledge of HTML, CSS, and JavaScript can start using Bootstrap.

---

## Responsive Design

Bootstrap automatically adjusts layouts for different screen sizes such as:

- Mobile phones
- Tablets
- Laptops
- Desktop computers

It uses a **mobile-first approach**, meaning layouts are designed for small screens first and then adapted for larger devices.

---

## Pre-built Components

Bootstrap includes ready-made components such as:

- Buttons
- Cards
- Forms
- Navigation Bars
- Alerts
- Modals
- Carousels
- Tables

These components reduce development time.

---

## Open Source

Bootstrap is completely free to download, use, and customize.

---

## Saves Development Time

Bootstrap provides predefined classes and templates, allowing developers to build websites much faster than writing CSS from scratch.

---

## Consistent Design

All Bootstrap components follow the same design system, making websites look clean and consistent.

---

# 3. Features of Bootstrap 4

Bootstrap 4 includes many powerful features:

- Responsive Grid System
- Mobile-First Design
- Predefined CSS Classes
- Utility Classes
- Ready-made UI Components
- JavaScript Plugins
- Cross-browser Compatibility
- Easy Customization

---

# 4. Things You Can Do With Bootstrap 4

Bootstrap makes it easy to create many types of user interfaces.

## Responsive Websites

Create websites that automatically adjust to different screen sizes.

---

## Multi-Column Layouts

Use Bootstrap's 12-column grid system to build layouts quickly.

Example:

```
col-6 + col-6

col-4 + col-4 + col-4

col-3 + col-3 + col-3 + col-3
```

---

## Forms

Create professional-looking forms using predefined Bootstrap classes.

Examples:

- Login Form
- Registration Form
- Contact Form

---

## Navigation Bars

Build responsive navigation menus without writing much CSS.

---

## Accordions

Create expandable and collapsible content sections.

---

## Modals

Display popup windows without writing custom JavaScript.

---

## Tabs

Organize large amounts of content into tabs.

---

## Tooltips

Display small hint messages when hovering over elements.

---

## Popovers

Show additional information when clicking or hovering over an element.

---

## Carousel

Create responsive image sliders for showcasing products or images.

---

## Alerts

Display messages such as:

- Success
- Warning
- Error
- Information

---

# 5. Bootstrap 4 Grid System

Bootstrap uses a **12-column grid system**.

Example:

```
|----|----|----|----|----|----|----|----|----|----|----|----|
```

Some common layouts:

```
12

6 + 6

4 + 4 + 4

3 + 3 + 3 + 3

8 + 4

9 + 3
```

---

# 6. Responsive Breakpoints

Bootstrap provides different breakpoints for various screen sizes.

| Breakpoint | Device |
|------------|----------------|
| `.col-` | Extra Small |
| `.col-sm-` | Small Devices |
| `.col-md-` | Medium Devices |
| `.col-lg-` | Large Devices |
| `.col-xl-` | Extra Large Devices |

These classes help create responsive layouts.

---

# 7. Utility Classes

Bootstrap provides utility classes to reduce custom CSS.

Examples:

Spacing

```
mt-3
mb-4
pt-2
px-5
```

Text

```
text-center

text-start

text-end

text-primary
```

Background

```
bg-primary

bg-success

bg-danger

bg-dark
```

Display

```
d-flex

d-block

d-none
```

Alignment

```
justify-content-center

align-items-center
```

---

# 8. Cross-Browser Compatibility

Bootstrap works on all major modern browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Internet Explorer 10+

---

# 9. Advantages of Bootstrap

- Easy to learn
- Mobile-first framework
- Responsive by default
- Free and open source
- Faster development
- Professional UI components
- Consistent design
- Cross-browser support
- Large community support

---

# 10. Bootstrap 3 vs Bootstrap 4

| Bootstrap 3 | Bootstrap 4 |
|--------------|-------------|
| Older version | Newer version |
| Less flexible grid | Improved grid system |
| Fewer utility classes | More utility classes |
| Older components | Modern components |
| Less responsive | Better mobile-first support |

---

# 11. Summary

Bootstrap is one of the most popular front-end frameworks for developing responsive and modern websites.

It provides:

- Ready-made UI components
- Responsive layouts
- Utility classes
- Grid system
- Faster development
- Consistent design

Bootstrap helps developers build professional websites with less code and in less time.

---

# 12. Bootstrap Grid System

## What is the Bootstrap Grid System?

The Bootstrap Grid System is a layout system that helps developers create responsive web pages. It uses **containers**, **rows**, and **columns** to organize content.

Bootstrap's grid system is built using **Flexbox**, making layouts flexible and responsive across different screen sizes.

---

# Components of the Grid System

The Bootstrap Grid System consists of three main parts:

1. Container
2. Row
3. Column

Basic structure:

```html
<div class="container">
    <div class="row">
        <div class="col">
            Column 1
        </div>

        <div class="col">
            Column 2
        </div>
    </div>
</div>
```

---

# Container

A container is the outer wrapper of the grid system.

It provides proper spacing and alignment for the content.

Bootstrap provides two types of containers:

## 1. .container

A responsive container with a fixed maximum width.

Example:

```html
<div class="container">
    Content
</div>
```

---

## 2. .container-fluid

A full-width container that always takes up 100% of the screen width.

Example:

```html
<div class="container-fluid">
    Content
</div>
```

---

# Row

Rows are used to group columns horizontally.

Example:

```html
<div class="row">

</div>
```

Rows should always be placed inside a container.

---

# Column

Columns hold the actual content.

Example:

```html
<div class="col">
    Content
</div>
```

Columns must always be placed inside a row.

---

# Bootstrap Grid Classes

Bootstrap provides different column classes for different screen sizes.

| Class | Device Size |
|--------|-------------|
| `.col-` | Extra Small (All Devices) |
| `.col-sm-` | Small Devices (≥576px) |
| `.col-md-` | Medium Devices (≥768px) |
| `.col-lg-` | Large Devices (≥992px) |
| `.col-xl-` | Extra Large Devices (≥1200px) |
| `.col-xxl-` | Extra Extra Large Devices (Bootstrap 5) |

---

# 12-Column Grid System

Bootstrap divides every row into **12 equal columns**.

Example:

```
|----|----|----|----|----|----|----|----|----|----|----|----|
```

Possible layouts:

```
12

6 + 6

4 + 4 + 4

3 + 3 + 3 + 3

8 + 4

9 + 3

2 + 10

5 + 7
```

The total columns in one row should normally add up to **12**.

---

# Example 1: Two Equal Columns

```html
<div class="container">
    <div class="row">

        <div class="col-6">
            Left
        </div>

        <div class="col-6">
            Right
        </div>

    </div>
</div>
```

Output:

```
|------Left------|------Right------|
```

---

# Example 2: Three Equal Columns

```html
<div class="container">
    <div class="row">

        <div class="col-4">
            One
        </div>

        <div class="col-4">
            Two
        </div>

        <div class="col-4">
            Three
        </div>

    </div>
</div>
```

Output:

```
|----One----|----Two----|---Three---|
```

---

# Example 3: Four Equal Columns

```html
<div class="container">
    <div class="row">

        <div class="col-3">1</div>
        <div class="col-3">2</div>
        <div class="col-3">3</div>
        <div class="col-3">4</div>

    </div>
</div>
```

---

# Grid System Rules

Bootstrap Grid follows several important rules.

## Rule 1

Rows must always be placed inside:

- `.container`
- `.container-fluid`

---

## Rule 2

Columns must always be placed inside a row.

Correct:

```html
<div class="container">

    <div class="row">

        <div class="col">

        </div>

    </div>

</div>
```

---

## Rule 3

Content should always be placed inside columns.

Incorrect:

```html
<div class="row">

    <h1>Hello</h1>

</div>
```

Correct:

```html
<div class="row">

    <div class="col">

        <h1>Hello</h1>

    </div>

</div>
```

---

## Rule 4

Bootstrap uses a 12-column layout.

Examples:

```
6 + 6 = 12

3 + 3 + 3 + 3 = 12

8 + 4 = 12

9 + 3 = 12
```

---

## Rule 5

Column widths are percentage-based, making layouts responsive.

---

# Gutters

Gutters are the spaces between columns.

Bootstrap creates gutters automatically using padding.

Example:

```
| Col 1 |   Gap   | Col 2 |
```

---

# Responsive Grid

Bootstrap automatically adjusts layouts for different screen sizes.

Example:

```html
<div class="col-sm-6 col-md-4 col-lg-3">
```

Meaning:

- Small screens → 6 columns
- Medium screens → 4 columns
- Large screens → 3 columns

---

# Auto Layout Columns

If no width is specified, Bootstrap automatically divides the available space equally.

Example:

```html
<div class="row">

    <div class="col">
        One
    </div>

    <div class="col">
        Two
    </div>

    <div class="col">
        Three
    </div>

</div>
```

Each column automatically gets equal width.

---

# Advantages of Bootstrap Grid

- Mobile-first design
- Responsive layouts
- Flexible columns
- Easy to learn
- Built with Flexbox
- Faster layout creation
- Consistent spacing

---

# Summary

The Bootstrap Grid System is a responsive layout system built with **containers**, **rows**, and **columns**.

Remember:

- Container → Holds everything
- Row → Groups columns
- Column → Holds content

Every row is divided into **12 columns**, allowing developers to create flexible and responsive layouts for different screen sizes.

---

# 13. Nested Grid (Nested Rows)

Bootstrap allows you to create a grid inside another grid. This is called a **nested grid**.

A nested row must always be placed inside a column.

Example:

```html
<div class="container-fluid">

    <div class="row">

        <div class="col-6">

            <div class="row">

                <div class="col-6">A</div>
                <div class="col-2">B</div>
                <div class="col-4">C</div>

            </div>

        </div>

        <div class="col-6">
            D
        </div>

    </div>

</div>
```

Output:

```
-----------------------------------
|         | A | B | C |     D      |
-----------------------------------
```

Rules:

- A nested `.row` must be inside a `.col-*`.
- Nested columns must still follow the 12-column rule.

---

# 14. Responsive Columns

Bootstrap allows layouts to change automatically according to screen size.

Example:

```html
<div class="col-sm-6 col-lg-4">
```

Meaning:

- Small screens (≥576px): Takes 6 columns (50%)
- Large screens (≥992px): Takes 4 columns (33.33%)

Another example:

```html
<div class="row">

    <div class="col-sm-6 col-lg-4">
        Column 1
    </div>

    <div class="col-sm-6 col-lg-4">
        Column 2
    </div>

    <div class="col-sm-12 col-lg-4">
        Column 3
    </div>

</div>
```

Layout:

Large Screen

```
|----1----|----2----|----3----|
```

Small Screen

```
|------1------|
|------2------|
|------3------|
```

Bootstrap automatically rearranges columns based on screen width.

---

# 15. Bootstrap Breakpoints

Bootstrap uses breakpoints to create responsive layouts.

| Class | Screen Width |
|--------|--------------|
| `.col-` | All screen sizes |
| `.col-sm-` | ≥576px |
| `.col-md-` | ≥768px |
| `.col-lg-` | ≥992px |
| `.col-xl-` | ≥1200px |
| `.col-xxl-` | ≥1400px (Bootstrap 5) |

Each breakpoint applies to that size and all larger sizes.

Example:

```html
<div class="col-sm-6 col-lg-4">
```

This means:

- Extra Small → 100%
- Small → 50%
- Medium → 50%
- Large → 33.33%
- Extra Large → 33.33%
- Extra Extra Large → 33.33%

---

# 16. Styling Bootstrap Layouts

When learning Bootstrap, it is common to add custom CSS so containers, rows, and columns are easier to visualize.

Example:

```css
.container-fluid{
    background-color:#6c2eb9;
}

.row{
    background-color:#ff9232;
}

[class*="col-"]{
    background-color:#00c3aa;
    border:2px solid rgba(0,0,0,.3);
}
```

Explanation:

- `.container-fluid` → Styles the full-width container.
- `.row` → Styles each row.
- `[class*="col-"]` → Selects every class containing `col-` (such as `.col-6`, `.col-lg-4`, `.col-sm-12`) and applies the same styles to all Bootstrap columns.

This selector is useful when practicing the Bootstrap Grid System.

---

# 17. Bootstrap Grid Best Practices

- Always place `.row` inside a `.container` or `.container-fluid`.
- Always place columns inside a `.row`.
- Ensure column sizes usually add up to **12**.
- Use responsive classes (`col-sm`, `col-md`, `col-lg`) to create mobile-friendly layouts.
- Use nested rows only inside columns.
- Prefer Bootstrap utility classes before writing custom CSS.

---

---

# End of Bootstrap 4 Notes