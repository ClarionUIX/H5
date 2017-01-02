/*
jquery.percentageloader.js

Copyright (c) 2012, Better2Web
All rights reserved.

This jQuery plugin is licensed under the Simplified BSD License. Please
see the file license.txt that was included with the plugin bundle.

*/

/*global jQuery */

(function ($) {
    /* Strict mode for this plugin */
    "use strict";
    /*jslint browser: true */

    /* Our spiral gradient data */
    var imgdata = "data:image/png;base64,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",
        gradient = new Image();
    gradient.src = imgdata;

    /** Percentage loader
     * @param	params	Specify options in {}. May be on of width, height, progress or value.
     *
     * @example $("#myloader-container).percentageLoader({
		    width : 256,  // width in pixels
		    height : 256, // height in pixels
		    progress: 0,  // initialise progress bar position, within the range [0..1]
		    value: '0kb'  // initialise text label to this value
		});
     */
    $.fn.percentageLoader = function (params) {
        var settings, canvas, percentageText, valueText, items, i, item, selectors, s, ctx, progress,
            value, cX, cY, lingrad, innerGrad, tubeGrad, innerRadius, innerBarRadius, outerBarRadius,
            radius, startAngle, endAngle, counterClockwise, completeAngle, setProgress, setValue,
            applyAngle, drawLoader, clipValue, outerDiv;

        /* Specify default settings */
        settings = {
            width: 256,
            height: 256,
            progress: 0,
            value: '0kb',
            controllable: false,
            customText: ' '
        };

        /* Override default settings with provided params, if any */
        if (params !== undefined) {
            $.extend(settings, params);
        } else {
            params = settings;
        }

        outerDiv = document.createElement('div');
        outerDiv.style.width = settings.width + 'px';
        outerDiv.style.height = settings.height + 'px';
        outerDiv.style.textalign = 'center';
        outerDiv.style.marginLeft = 'auto';
        outerDiv.style.marginRight = 'auto';
        outerDiv.style.position = 'relative';

        $(this).append(outerDiv);

        /* Create our canvas object */
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', settings.width);
        canvas.setAttribute('height', settings.height);
        canvas.style.textalign = 'center';

        outerDiv.appendChild(canvas);

        /* Create div elements we'll use for text. Drawing text is
         * possible with canvas but it is tricky working with custom
         * fonts as it is hard to guarantee when they become available
         * with differences between browsers. DOM is a safer bet here */
        percentageText = document.createElement('div');
        percentageText.style.width = (settings.width.toString() - 2) + 'px';
        percentageText.style.textAlign = 'center';
        percentageText.style.height = '50px';
        percentageText.style.left = 0;
        percentageText.style.position = 'absolute';

        valueText = document.createElement('div');
        valueText.style.width = (settings.width - 2).toString() + 'px';
        valueText.style.textAlign = 'center';
        valueText.style.height = '0px';
        valueText.style.overflow = 'hidden';
        valueText.style.left = 0;
        valueText.style.position = 'absolute';

        /* Force text items to not allow selection */
        items = [valueText, percentageText];
        for (i  = 0; i < items.length; i += 1) {
            item = items[i];
            selectors = [
                '-webkit-user-select',
                '-khtml-user-select',
                '-moz-user-select',
                '-o-user-select',
                'user-select'];

            for (s = 0; s < selectors.length; s += 1) {
                $(item).css(selectors[s], 'none');
            }
        }

        /* Add the new dom elements to the containing div */
        outerDiv.appendChild(percentageText);
        outerDiv.appendChild(valueText);

        /* Get a reference to the context of our canvas object */
        ctx = canvas.getContext("2d");


        /* Set various initial values */

        /* Centre point */
        cX = (canvas.width / 2) - 1;
        cY = (canvas.height / 2) - 1;

        /* Create our linear gradient for the outer ring */
        lingrad = ctx.createLinearGradient(cX, 0, cX, canvas.height);
        lingrad.addColorStop(0, '#000000');
        lingrad.addColorStop(1, '#000033');

        /* Create inner gradient for the outer ring */
        innerGrad = ctx.createLinearGradient(cX, cX * 0.133333, cX, canvas.height - cX * 0.133333);
        innerGrad.addColorStop(0, '#000000');
        innerGrad.addColorStop(1, '#000033');

        /* Tube gradient (background, not the spiral gradient) */
        tubeGrad = ctx.createLinearGradient(cX, 0, cX, canvas.height);
        tubeGrad.addColorStop(0, '#333333');
        tubeGrad.addColorStop(1, '#131313');

        /* The inner circle is 2/3rds the size of the outer one */
        innerRadius = cX * 0.6666;
        /* Outer radius is the same as the width / 2, same as the centre x
        * (but we leave a little room so the borders aren't truncated) */
        radius = cX - 2;

        /* Calculate the radii of the inner tube */
        innerBarRadius = innerRadius + (cX * 0.06);
        outerBarRadius = radius - (cX * 0.06);

        /* Bottom left angle */
        startAngle = 2.1707963267949;
        /* Bottom right angle */
        endAngle = 0.9707963267949 + (Math.PI * 2.0);

        /* Nicer to pass counterClockwise / clockwise into canvas functions
        * than true / false */
        counterClockwise = false;

        /* Borders should be 1px */
        ctx.lineWidth = 1;

        /**
         * Little helper method for transforming points on a given
         * angle and distance for code clarity
         */
        applyAngle = function (point, angle, distance) {
            return {
                x : point.x + (Math.cos(angle) * distance),
                y : point.y + (Math.sin(angle) * distance)
            };
        };


        /**
         * render the widget in its entirety.
         */
        drawLoader = function () {
            /* Clear canvas entirely */
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            /*** IMAGERY ***/

            /* draw outer circle
            ctx.fillStyle = lingrad;
            ctx.beginPath();
            ctx.strokeStyle = '#b2d5ed';
            ctx.arc(cX, cY, radius, 0, Math.PI * 2, counterClockwise);
            ctx.fill();
            ctx.stroke();

            /* draw inner circle
            ctx.fillStyle = innerGrad;
            ctx.beginPath();
            ctx.arc(cX, cY, innerRadius, 0, Math.PI * 2, counterClockwise);
            ctx.fill();
            ctx.strokeStyle = '#b2d5edaa';
            ctx.stroke(); */

            ctx.beginPath();

            /**
             * Helper function - adds a path (without calls to beginPath or closePath)
             * to the context which describes the inner tube. We use this for drawing
             * the background of the inner tube (which is always at 100%) and the
             * progress meter itself, which may vary from 0-100% */
            function makeInnerTubePath(startAngle, endAngle) {
                var centrePoint, startPoint, controlAngle, capLength, c1, c2, point1, point2;
                centrePoint = {
                    x : cX,
                    y : cY
                };

                startPoint = applyAngle(centrePoint, startAngle, innerBarRadius);

                ctx.moveTo(startPoint.x, startPoint.y);

                point1 = applyAngle(centrePoint, endAngle, innerBarRadius);
                point2 = applyAngle(centrePoint, endAngle, outerBarRadius);

                controlAngle = endAngle + (3.142 / 2.0);
                /* Cap length - a fifth of the canvas size minus 4 pixels */
                capLength = (cX * 0.20) - 4;

                c1 = applyAngle(point1, controlAngle, capLength);
                c2 = applyAngle(point2, controlAngle, capLength);

                ctx.arc(cX, cY, innerBarRadius, startAngle, endAngle, false);
                ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, point2.x, point2.y);
                ctx.arc(cX, cY, outerBarRadius, endAngle, startAngle, true);

                point1 = applyAngle(centrePoint, startAngle, innerBarRadius);
                point2 = applyAngle(centrePoint, startAngle, outerBarRadius);

                controlAngle = startAngle - (3.142 / 2.0);

                c1 = applyAngle(point2, controlAngle, capLength);
                c2 = applyAngle(point1, controlAngle, capLength);

                ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, point1.x, point1.y);
            }

            /* Background tube */
            ctx.beginPath();
            ctx.strokeStyle = '#393e45';
            makeInnerTubePath(startAngle, endAngle);

            ctx.fillStyle = tubeGrad;
            ctx.fill();
            ctx.stroke();

            /* Calculate angles for the the progress metre */
            completeAngle = startAngle + (progress * (endAngle - startAngle));

            ctx.beginPath();
            makeInnerTubePath(startAngle, completeAngle);

            /* We're going to apply a clip so save the current state */
            ctx.save();
            /* Clip so we can apply the image gradient */
            ctx.clip();

            /* Draw the spiral gradient over the clipped area */
            ctx.drawImage(gradient, 0, 0, canvas.width, canvas.height);

            /* Undo the clip */
            ctx.restore();

            /* Draw the outline of the path */
            ctx.beginPath();
            makeInnerTubePath(startAngle, completeAngle);
            ctx.stroke();

            /*** TEXT ***/
            (function () {
                var fontSize, string, smallSize, heightRemaining;
                /* Calculate the size of the font based on the canvas size */
                fontSize = cX / 2;

                percentageText.style.top = ((settings.height / 2) - (fontSize / 2)).toString() + 'px';
                percentageText.style.color = '#80a9c8';
                percentageText.style.font = fontSize.toString() + 'px Helvetica';
                percentageText.style.textShadow = '0 1px 1px #FFFFFF';

                /* Calculate the text for the given percentage */
                string = (progress * 100.0).toFixed(0) + '%';

                percentageText.innerHTML = string;

                /* Calculate font and placement of small 'value' text */
                smallSize = cX / 6.5;
                valueText.style.color = '#80a9c8';
                valueText.style.font = smallSize.toString() + 'px Helvetica';
                valueText.style.height = smallSize.toString() + 'px';
                valueText.style.textShadow = 'None';

                /* Ugly vertical align calculations - fit into bottom ring.
                 * The bottom ring occupes 1/6 of the diameter of the circle */
                heightRemaining = (settings.height * 0.16666666) - smallSize;
                valueText.style.top = ((settings.height * 0.8633333) + (heightRemaining / 4)).toString() + 'px';
            }());
        };

        /**
        * Check the progress value and ensure it is within the correct bounds [0..1]
        */
        clipValue = function () {
            if (progress < 0) {
                progress = 0;
            }

            if (progress > 1.0) {
                progress = 1.0;
            }
        };

        /* Sets the current progress level of the loader
         *
         * @param value the progress value, from 0 to 1. Values outside this range
         * will be clipped
         */
        setProgress = function (value) {
            /* Clip values to the range [0..1] */
            progress = value;
            clipValue();
            drawLoader();
        };

        this.setProgress = setProgress;

        setValue = function (val) {
            value = val;
            valueText.innerHTML = value + " " + settings.customText;
        };

        this.setValue = setValue;
        this.setValue(settings.value);

        progress = settings.progress;
        clipValue();

        /* Do an initial draw */
        drawLoader();

        /* In controllable mode, add event handlers */
        if (params.controllable === true) {
            (function () {
                var mouseDown, getDistance, adjustProgressWithXY;
                getDistance = function (x, y) {
                    return Math.sqrt(Math.pow(x - cX, 2) + Math.pow(y - cY, 2));
                };

                mouseDown = false;

                adjustProgressWithXY = function (x, y) {
                    /* within the bar, calculate angle of touch point */
                    var pX, pY, angle, startTouchAngle, range, posValue;
                    pX = x - cX;
                    pY = y - cY;

                    angle = Math.atan2(pY, pX);
                    if (angle > Math.PI / 2.0) {
                        angle -= (Math.PI * 2.0);
                    }

                    startTouchAngle = startAngle - (Math.PI * 2.0);
                    range = endAngle - startAngle;
                    posValue = (angle - startTouchAngle) / range;
                    setProgress(posValue);

                    if (params.onProgressUpdate) {
                        /* use the progress value as this will have been clipped
                         * to the correct range [0..1] after the call to setProgress
                         */
                        params.onProgressUpdate(progress);
                    }
                };

                $(outerDiv).mousedown(function (e) {
                    var offset, x, y, distance;
                    offset = $(this).offset();
                    x = e.pageX - offset.left;
                    y = e.pageY - offset.top;

                    distance = getDistance(x, y);

                    if (distance > innerRadius && distance < radius) {
                        mouseDown = true;
                        adjustProgressWithXY(x, y);
                    }
                }).mouseup(function () {
                    mouseDown = false;
                }).mousemove(function (e) {
                    var offset, x, y;
                    if (mouseDown) {
                        offset = $(outerDiv).offset();
                        x = e.pageX - offset.left;
                        y = e.pageY - offset.top;
                        adjustProgressWithXY(x, y);
                    }
                }).mouseleave(function () {
                    mouseDown = false;
                });
            }());
        }
        return this;
    };
}(jQuery));
