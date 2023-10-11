import tkinter as tk

def calcular_resultado():
    notas_atividades = []
    for i in range(8):
        nota = notas_entries[i].get()
        if nota:
            notas_atividades.append(float(nota))
    
    nota_prova_final = prova_final_entry.get()
    
    if notas_atividades and nota_prova_final:
        nota_final = 0.4 * (sum(notas_atividades) / len(notas_atividades)) + 0.6 * float(nota_prova_final)
    elif notas_atividades:
        nota_final = sum(notas_atividades) / len(notas_atividades)
    elif nota_prova_final:
        nota_final = float(nota_prova_final)
    else:
        nota_final = 0
    
    # Limpar os resultados anteriores
    for widget in resultados_frame.winfo_children():
        widget.destroy()
    
    # Exibir os resultados
    tk.Label(resultados_frame, text=f"Nota Final: {nota_final}").pack()
    
    if nota_final >= 6.0:
        tk.Label(resultados_frame, text="Situação: Aprovado").pack()
    elif nota_final >= 3.0:
        tk.Label(resultados_frame, text="Situação: Recuperação").pack()
    else:
        tk.Label(resultados_frame, text="Situação: Reprovado").pack()

def reset():
    # Limpar os campos de notas
    for entry in notas_entries:
        entry.delete(0, tk.END)
    
    prova_final_entry.delete(0, tk.END)
    
    # Limpar os resultados anteriores
    for widget in resultados_frame.winfo_children():
        widget.destroy()

# Criar a janela principal
window = tk.Tk()
window.title("Calculadora de Médias")

# Frame para os campos de notas das atividades
atividades_frame = tk.Frame(window)
notas_entries = []
for i in range(8):
    label = tk.Label(atividades_frame, text=f"Nota Atividade {i+1}:")
    label.grid(row=i, column=0)
    nota_entry = tk.Entry(atividades_frame)
    nota_entry.grid(row=i, column=1)
    notas_entries.append(nota_entry)

# Frame para a nota da prova final
prova_final_frame = tk.Frame(window)
prova_final_label = tk.Label(prova_final_frame, text="Nota Prova Final:")
prova_final_label.grid(row=0, column=0)
prova_final_entry = tk.Entry(prova_final_frame)
prova_final_entry.grid(row=0, column=1)

# Botão para calcular
calcular_button = tk.Button(window, text="Calcular", command=calcular_resultado)

# Botão de reset
reset_button = tk.Button(window, text="Reset", command=reset)

# Frame para os resultados
resultados_frame = tk.Frame(window)

# Label de média parcial
media_parcial_label = tk.Label(window, text="Média Parcial:")

# Posicionar os widgets na janela principal
atividades_frame.pack()
prova_final_frame.pack()
calcular_button.pack()
reset_button.pack()
media_parcial_label.pack()
resultados_frame.pack()

# Iniciar o loop principal da aplicação
window.mainloop()