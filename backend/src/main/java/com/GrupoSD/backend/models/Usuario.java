package com.GrupoSD.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = Usuario.TABLE_NAME)
public class Usuario {

    public interface CriarUsuario {
    }

    public static final String TABLE_NAME = "usuario";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario", unique = true)
    private Integer idUsuario;

    @Column(name = "email", unique = true, nullable = false, length = 80)
    @NotBlank(groups = CriarUsuario.class)
    @Size(groups = CriarUsuario.class, min = 2, max = 80)
    private String emailUsuario;

    @Column(name = "nome_usuario", unique = true, nullable = false, length = 80)
    @NotBlank(groups = CriarUsuario.class)
    @Size(groups = CriarUsuario.class, min = 2, max = 80)
    private String nomeUsuario;

    @JsonProperty(access = Access.WRITE_ONLY)
    @Column(name = "senha", nullable = false, length = 80)
    @NotBlank(groups = { CriarUsuario.class })
    @Size(groups = { CriarUsuario.class }, min = 8, max = 80)
    private String senhaUsuario;

    public Usuario() {
    }

    public Usuario(Integer idUsuario, String nomeUsuario, String emailUsuario, String senhaUsuario) {
        this.idUsuario = idUsuario;
        this.nomeUsuario = nomeUsuario;
        this.emailUsuario = emailUsuario;
        this.senhaUsuario = senhaUsuario;
    }

    public Integer getIdUsuario() {
        return this.idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNomeUsuario() {
        return this.nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public String getEmailUsuario() {
        return this.emailUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public String getSenhaUsuario() {
        return this.senhaUsuario;
    }

    public void setSenhaUsuario(String senhaUsuario) {
        this.senhaUsuario = senhaUsuario;
    }
}
