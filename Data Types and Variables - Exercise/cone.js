function cone(radius, height) {
    let volume = Math.PI * (radius ** 2) * height / 3;
    let l = Math.sqrt(radius ** 2 + height ** 2);
    let area = Math.PI * radius * (radius + l);
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5)