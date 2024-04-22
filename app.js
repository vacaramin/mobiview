// app.js
document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('sketch-canvas');
    let ctx = canvas.getContext('2d');
    let isDrawing = false;
    let tool = 'pen';
    let toolSize = 5;
    let lastX = 0;
    let lastY = 0;
    let elements = [];
    let selectedElement = null;
    let offsetX = 0;
    let offsetY = 0;

    // Toolbar buttons
    let penButton = document.getElementById('pen');
    let eraserButton = document.getElementById('eraser');
    let clearButton = document.getElementById('clear');
    let addButtonButton = document.getElementById('add-button');
    let addNavigationButton = document.getElementById('add-navigation');
    let selectToolButton = document.getElementById('select-tool');

    // Event listeners for toolbar buttons
    penButton.addEventListener('click', function() {
        tool = 'pen';
    });
    eraserButton.addEventListener('click', function() {
        tool = 'eraser';
    });
    clearButton.addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        elements = [];
        redrawElements();
    });
    addButtonButton.addEventListener('click', function() {
        addElement('button');
    });
    addNavigationButton.addEventListener('click', function() {
        addElement('navigation');
    });
    selectToolButton.addEventListener('click', function() {
        tool = 'select';
    });

    // Mouse events for drawing and selection
    canvas.addEventListener('mousedown', function(e) {
        handleMouseDown(e);
    });

    canvas.addEventListener('mousemove', function(e) {
        handleMouseMove(e);
    });

    canvas.addEventListener('mouseup', function() {
        handleMouseUp();
    });

    canvas.addEventListener('mouseout', function() {
        handleMouseUp();
    });

    // Touch events for drawing and selection on touch devices
    canvas.addEventListener('touchstart', function(e) {
        handleTouchStart(e);
    });

    canvas.addEventListener('touchmove', function(e) {
        handleTouchMove(e);
    });

    canvas.addEventListener('touchend', function() {
        handleMouseUp();
    });

    // Function to draw on the canvas
    function draw(x, y) {
        if (tool === 'pen') {
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = toolSize;
            ctx.stroke();
        } else if (tool === 'eraser') {
            ctx.clearRect(x - toolSize / 2, y - toolSize / 2, toolSize, toolSize);
        }
        [lastX, lastY] = [x, y];
    }

    // Function to add elements to the canvas
    function addElement(type) {
        let element = {
            type: type,
            x: lastX,
            y: lastY,
            width: 100,
            height: 50
        };
        elements.push(element);
        redrawElements();
    }

    // Function to draw elements on the canvas
    function drawElement(element) {
        ctx.beginPath();
        ctx.rect(element.x, element.y, element.width, element.height);
        ctx.stroke();

        // Check if the element is selected
        if (selectedElement === element) {
            // Draw a border around the selected element
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 2;
            ctx.strokeRect(element.x - 1, element.y - 1, element.width + 2, element.height + 2);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
        }

        // Add text to indicate the type of the element
        ctx.fillText(element.type === 'button' ? 'Button' : 'Navigation', element.x + 10, element.y + 30);
    }

    // Function to redraw all elements on the canvas
    function redrawElements() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        elements.forEach(function(element) {
            drawElement(element);
        });
    }

    // Mouse event handlers
    function handleMouseDown(e) {
        if (tool === 'select') {
            selectElement(e);
        } else {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        }
    }

    function handleMouseMove(e) {
        if (isDrawing) {
            draw(e.offsetX, e.offsetY);
        } else if (selectedElement) {
            moveElement(e);
        }
    }

    function handleMouseUp() {
        if (isDrawing) {
            isDrawing = false;
        } else if (selectedElement) {
            selectedElement = null;
        }
    }

    // Touch event handlers
    function handleTouchStart(e) {
        if (tool === 'select') {
            selectElement(e);
        } else {
            isDrawing = true;
            let touch = e.touches[0];
            [lastX, lastY] = [touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop];
        }
    }

    function handleTouchMove(e) {
        if (isDrawing) {
            let touch = e.touches[0];
            draw(touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop);
        } else if (selectedElement) {
            moveElement(e);
        }
    }

    // Function to select an element
    function selectElement(e) {
        selectedElement = null;
        let posX = e.offsetX || e.touches[0].clientX - canvas.offsetLeft;
        let posY = e.offsetY || e.touches[0].clientY - canvas.offsetTop;
        for (let i = elements.length - 1; i >= 0; i--) {
            let element = elements[i];
            if (posX >= element.x && posX <= element.x + element.width &&
                posY >= element.y && posY <= element.y + element.height) {
                selectedElement = element;
                offsetX = posX - element.x;
                offsetY = posY - element.y;
                break;
            }
        }
        redrawElements();
    }

    // Function to move the selected element
    function moveElement(e) {
        let posX = e.offsetX || e.touches[0].clientX - canvas.offsetLeft;
        let posY = e.offsetY || e.touches[0].clientY - canvas.offsetTop;
        selectedElement.x = posX - offsetX;
        selectedElement.y = posY - offsetY;
        redrawElements();
    }
});