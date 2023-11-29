package com.GrupoSD.miniLocalChat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GrupoSD.miniLocalChat.models.Usuario;


@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer>{

} 