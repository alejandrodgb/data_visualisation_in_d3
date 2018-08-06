# Notes on Data Visualisation

## The right visualisation
- https://signalvnoise.com/posts/3388-three-charts-are-all-i-need
- http://www.perceptualedge.com/articles/ie/the_right_graph.pdf
- http://www.storytellingwithdata.com/blog/2013/04/chart-chooser
- https://apandre.files.wordpress.com/2011/02/chartchooserincolor.jpg
- http://www.perceptualedge.com/images/Effective_Chart_Design.pdf
- http://www.infovis.net/printMag.php?num=179&lang=2

## Visual perception
- http://www.perceptualedge.com/articles/ie/visual_perception.pdf

## Using the right colours
- http://www.perceptualedge.com/articles/visual_business_intelligence/rules_for_using_color.pdf
- https://vcglab.org/gvi-files/infovis2011_slides.pdf
- https://vcglab.org/gvi-files/borkin-InfoVis2011_camera-ready.pdf
- https://phys.org/news/2011-10-heart-disease-visualization-experts-simpler.html
- http://www.rkriz.net/Projects//create_color_table/color_07.pdf
- https://cartastrophe.wordpress.com/
- http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3
- http://www.vizwiz.com/2013/02/improving-wsj-historical-us.html
-
### Colour blindness
- http://www.color-blindness.com/color-blindness-tests/
- https://en.wikipedia.org/wiki/Color_blindness
- https://www.r-bloggers.com/choosing-colour-palettes-part-i-introduction/
- https://www.r-bloggers.com/choosing-colour-palettes-part-ii-educated-choices/
- http://www.cookbook-r.com/Graphs/Colors_(ggplot2)/

## Gestalt principles of perception
- https://www.slideshare.net/luisaepv/the-gestalt-laws-of-perception
- http://emeeks.github.io/gestaltdataviz/section1.html
- http://graphicdesign.spokanefalls.edu/tutorials/process/gestaltprinciples/gestaltprinc.htm

## Reducing chart junk
- http://www.perceptualedge.com/articles/dmreview/grid_lines.pdf

## The grammar of graphics

The Grammar of Graphics is a visualization theory developed by Leland Wilkinson in 1999 with the publication of the eponymous book.

It is quite an extensive theory which has influenced the development of graphics and visualization libraries alike (including D3 and its precursors), but in this class you will focus on 3 of its key principles:

1. Separation of data from aesthetics
2. Definition of common plot/chart elements
3. Composition of these common elements

### Separation of Concerns
You just saw some of the benefits of separating the data from the visual presentation of that data in the previous videos. The main take-aways are:

- Independently transform data and present data
- Delegate work and responsibilities
  - Engineer focuses on data manipulation
  - Designer focuses on visual encoding of data
- Present multiple visual representations of a dataset
  - Ex: Bubble chart and line chart show different facets of a dataset.

###Common Elements

When thinking about creating a chart or graphic, it is often helpful to visually decompose what you want to achieve. In previous videos you saw how to abstract a chart into more basic visual encodings. In the map example, you saw that a choropleth is a combination of geography and color while a cartogram is a combination of geography and size. When talking about composable elements, a few of the most common are:

- Coordinate System (cartesian vs. radial/polar)
- Scales (linear, logarithmic, etc.)
- Text annotations
- Shape (lines, circles, etc.)
- Data Types (Categorical, Continuous, etc.)

### Composition

The beauty of the Grammar of Graphics surfaces when you combine these common components. For example, you can create a bar chart by mapping a value in the data to the height of the bar in cartesian space, but you can also can also map these values in polar coordinates, in which the data value corresponds to the radial degree of a slice, to get a pie chart.

- Categorical + Continuous x Cartesian = Bar Chart
- Categorical + Continuous x Polar = Pie Chart
- Continuous + Continuous x Cartesian = Scatter Chart

And you can create a plethora of other charts by combining these common components in different ways.

### Resources
- https://www.science-craft.com/2014/07/08/introducing-the-grammar-of-graphics-plotting-concept/
- http://byrneslab.net/classes/biol607/readings/wickham_layered-grammar.pdf
- https://ramnathv.github.io/pycon2014-r/visualize/ggplot2.html

## EDA (Exploratory Data Analysis) vs Sketching

| EDA | Sketching |
|-----|-----------|
| - finding insights<br>- investigating erroneus values<br>- reviewing data structure<br>- audience: yourself | - exploring visual layout<br>-  exploring visual encodings<br>- audience: others |

## Data visualisation: data or aesthetics
- Part 1: http://dataremixed.com/2012/05/data-visualization-clarity-or-aesthetics/
- Part 2: http://dataremixed.com/2012/05/clarity-or-aesthetics-part-2-a-tale-of-four-quadrants/
- Part 3: http://dataremixed.com/2012/06/clarity-or-aesthetics-part-3-tips-for-achieving-both/

## Narrative Structures
|  | Quantitative (qT) v Qualitative (qL) |  |
| Rigourous and Empirical (RE) v Anecdotal & Ad-hoc (AA) | qT & RE<br>fivethirtyeight.com | qL & RE<br>Washington Post |
|  | qT & AA<br>Sports writers | qL & AA<br>Op-Ed |