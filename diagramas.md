# Diagramas de Flujo - Ejercicios de Lógica

Aquí tienes la representación de los diagramas de flujo solicitados.

---

### 🟢 Ejercicio 52: Mayor de dos números
```mermaid
graph TD
    A([Inicio]) --> B[/Leer num1, num2/]
    B --> C{num1 > num2?}
    C -- Sí --> D[/Escribir num1 es mayor/]
    C -- No --> E{num2 > num1?}
    E -- Sí --> F[/Escribir num2 es mayor/]
    E -- No --> G[/Escribir son iguales/]
    D --> H([Fin])
    F --> H
    G --> H
```

---

### 🟢 Ejercicio 53: Positivos (Uno, ambos o ninguno)
```mermaid
graph TD
    A([Inicio]) --> B[/Leer n1, n2/]
    B --> C{n1 > 0 AND n2 > 0?}
    C -- Sí --> D[/Escribir 'Los dos son positivos'/]
    C -- No --> E{n1 > 0 OR n2 > 0?}
    E -- Sí --> F[/Escribir 'Uno es positivo'/]
    E -- No --> G[/Escribir 'Ninguno es positivo'/]
    D --> H([Fin])
    F --> H
    G --> H
```

---

### 🟢 Ejercicio 54: Mayor de tres números
```mermaid
graph TD
    A([Inicio]) --> B[/Leer a, b, c/]
    B --> C{a > b?}
    C -- Sí --> D{a > c?}
    D -- Sí --> E[/Mayor es a/]
    D -- No --> F[/Mayor es c/]
    C -- No --> G{b > c?}
    G -- Sí --> H[/Mayor es b/]
    G -- No --> I[/Mayor es c/]
    E --> J([Fin])
    F --> J
    H --> J
    I --> J
```

---

### 🟢 Ejercicio 70: Adivinar número (3 intentos)
```mermaid
graph TD
    A([Inicio]) --> B[Generar Secreto]
    B --> C[Intentos = 3]
    C --> D{Intentos > 0?}
    D -- No --> E[/Fin: Perdiste/]
    D -- Sí --> F[/Leer Apuesta/]
    F --> G{Apuesta == Secreto?}
    G -- Sí --> H[/Fin: Ganaste!/]
    G -- No --> I[Intentos = Intentos - 1]
    I --> D
```
