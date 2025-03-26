print("Debe ingresar las medidas del cartón para calcular la altura óptima de la caja para el máximo volumen.")

ancho = int(input("Ingrese el valor del ancho del cartón: "))
largo = int(input("Ingrese el valor del largo del cartón: "))

volumen_max = 0  
altura_optima = 0  

# Bucle que prueba diferentes valores de h
# Se prueba h desde 1 hasta la mitad del menor lado del cartón, ya que no puede ser mayor a eso
for h in range(1, min(ancho, largo) // 2):

    volumen = h * (ancho - 2*h) * (largo - 2*h)
    
    # Si el volumen calculado es mayor al máximo encontrado, lo actualizamos
    if volumen > volumen_max:
        volumen_max = volumen
        altura_optima = h 

# Resultado final
print(f"El valor máximo de volumen es {volumen_max} y la altura óptima es {altura_optima}")