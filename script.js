// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element and its context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    // Draw the sky (background)
    ctx.fillStyle = "#87CEEB"; // Light blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the ground/grass
    ctx.fillStyle = "#7CFC00"; // Lawn green
    ctx.fillRect(0, 320, canvas.width, 80);
    
    // Draw the body of the house
    ctx.fillStyle = "#F5DEB3"; // Wheat color
    ctx.fillRect(100, 180, 300, 170); // (x, y, width, height)
    
    // Draw the roof
    ctx.beginPath();
    ctx.moveTo(75, 180);  // Left edge
    ctx.lineTo(250, 80);  // Top point
    ctx.lineTo(425, 180); // Right edge
    ctx.closePath();
    
    ctx.fillStyle = "#CD5C5C"; // Indian red
    ctx.fill();
    
    // Add roof outline
    ctx.strokeStyle = "#8B0000"; // Dark red
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw the door
    ctx.fillStyle = "#8B4513"; // Saddle brown
    ctx.fillRect(220, 280, 60, 70);
    
    // Draw door knob
    ctx.fillStyle = "#FFD700"; // Gold
    ctx.beginPath();
    ctx.arc(265, 320, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw left window
    ctx.fillStyle = "#B0C4DE"; // Light steel blue
    ctx.fillRect(140, 220, 50, 50);
    
    // Draw window frame - left window
    ctx.strokeStyle = "#4682B4"; // Steel blue
    ctx.lineWidth = 2;
    ctx.strokeRect(140, 220, 50, 50);
    ctx.beginPath();
    ctx.moveTo(165, 220);
    ctx.lineTo(165, 270);
    ctx.moveTo(140, 245);
    ctx.lineTo(190, 245);
    ctx.stroke();
    
    // Draw right window
    ctx.fillStyle = "#B0C4DE"; // Light steel blue
    ctx.fillRect(310, 220, 50, 50);
    
    // Draw window frame - right window
    ctx.strokeStyle = "#4682B4"; // Steel blue
    ctx.strokeRect(310, 220, 50, 50);
    ctx.beginPath();
    ctx.moveTo(335, 220);
    ctx.lineTo(335, 270);
    ctx.moveTo(310, 245);
    ctx.lineTo(360, 245);
    ctx.stroke();
    
    // Draw chimney
    ctx.fillStyle = "#A52A2A"; // Brown
    ctx.fillRect(350, 120, 25, 60);
    
    // Add some smoke from the chimney
    ctx.fillStyle = "rgba(200, 200, 200, 0.7)";
    ctx.beginPath();
    ctx.arc(362, 110, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(370, 95, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(380, 75, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw the sun
    ctx.fillStyle = "#FFD700"; // Gold
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw sun rays
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 3;
    for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        const angle = i * Math.PI / 4;
        ctx.lineTo(
            50 + Math.cos(angle) * 45,
            50 + Math.sin(angle) * 45
        );
        ctx.stroke();
    }
}); 