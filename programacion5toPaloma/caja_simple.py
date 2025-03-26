print("Debe ingresar las medidas del cartón para calcular la altura óptima de la caja para el máximo volumen.")

ancho = int(input("Ingrese el valor del ancho del cartón: "))
largo = int(input("Ingrese el valor del largo del cartón: "))

h = 1
volumen_max = 0  
altura_optima = 0

while h < min(ancho, largo) // 2:
    v = h * (ancho - 2*h) * (largo - 2*h)  # Calculamos el volumen
    if v > volumen_max:  # Comparamos con el volumen máximo encontrado
        volumen_max = v  # Actualizamos si encontramos un mejor volumen
        altura_optima = h
    h += 1  # Aumentamos la altura para la siguiente iteración

print(f"Volumen máximo: {volumen_max}, Altura óptima: {altura_optima}")