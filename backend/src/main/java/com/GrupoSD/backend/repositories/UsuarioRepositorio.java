package com.GrupoSD.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.GrupoSD.backend.models.Usuario;



@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer>{

    @Query("SELECT u FROM Usuario u WHERE u.emailUsuario = :emailUsuario AND u.senhaUsuario = :senhaUsuario")
    Usuario findByEmailUsuarioAndsenhaUsuario(@Param("emailUsuario") String emailUsuario, @Param("senhaUsuario") String senhaUsuario);
} 