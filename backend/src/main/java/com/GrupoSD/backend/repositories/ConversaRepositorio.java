package com.GrupoSD.backend.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.GrupoSD.backend.models.Conversa;

@Repository
public interface ConversaRepositorio extends JpaRepository<Conversa, String> {

    @Query("SELECT c FROM Conversa c WHERE c.idUsuario = :idUsuario")
    List<Conversa> findByIdUsuario(@Param("idUsuario") Integer idUsuario);

    @Query("SELECT c FROM Conversa c WHERE c.idUsuario = :idUsuario AND c.idConversa = :idConversa")
    List<Conversa> findByIdUsuarioAndIdConversa(@Param("idUsuario") Integer idUsuario, @Param("idConversa") Integer idConversa);

    @Query(value = "SELECT MAX(id_conversa) FROM Conversa WHERE id_usuario = :idUsuario", nativeQuery = true)
    Integer findMaxIdConversa(@Param("idUsuario") Integer idUsuario);
}