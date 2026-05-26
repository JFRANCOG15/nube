-- Active: 1761056214612@@127.0.0.1@3306@finanzas
create DATABASE Finanza
use finanza

create table transacciones(
    ts_id int PRIMARY KEY AUTO_INCREMENT,
    fecha DATE,
    categoria_id int,
    monto DECIMAL,

    Foreign Key (categoria_id) REFERENCES categoria(ct_id)
)

create TABLE categoria(
    ct_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50)
)

select * from transacciones

insert into categoria (nombre) values ('Alimentación'), ('Transporte'), ('Entretenimiento'), ('servicios'), ('Salud'), ('Otros')

insert into transacciones (fecha, categoria_id, monto) values ('2026-05-26', 1, 100.000), ('2026-05-26', 2, 50.000), ('2026-05-26', 3, 75.000), ('2026-05-26', 4, 20.000), ('2026-05-26', 5, 200.000)
