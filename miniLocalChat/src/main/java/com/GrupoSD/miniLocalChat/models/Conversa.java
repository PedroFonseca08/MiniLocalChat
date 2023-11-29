package com.GrupoSD.miniLocalChat.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


@Entity
@Table(name = Conversa.TABLE_NAME)
@IdClass(ConversaId.class)
public class Conversa {

    public static final String TABLE_NAME = "conversa";
    
    @Id
    @Column(name = "id_conversa", unique = true)
    private Integer idConversa;

    @Id
    @Column(name = "data", unique = true)
    private String data;

    @Id
    @Column(name = "id_usuario", nullable = false, updatable = false)
    private Integer idUsuario;

    @Column(name = "pergunta", nullable = false, length = 400)
    @NotBlank
    @Size(min = 1, max = 1000)
    private String pergunta;

    @Column(name = "resposta", nullable = false, length = 1000)
    @NotBlank
    @Size(min = 1, max = 1000)
    private String resposta;

    public Conversa() {
    }

    public Conversa(Integer idConversa, String data, Integer idUsuario, String pergunta, String resposta) {
        this.idConversa = idConversa;
        this.data = data;
        this.idUsuario = idUsuario;
        this.pergunta = pergunta;
        this.resposta = resposta;
    }

    public Integer getIdConversa() {
        return this.idConversa;
    }

    public void setIdConversa(Integer idConversa) {
        this.idConversa = idConversa;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }


    public Integer getIdUsuario() {
        return this.idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getPergunta() {
        return this.pergunta;
    }

    public void setPergunta(String pergunta) {
        this.pergunta = pergunta;
    }

    public String getResposta() {
        return this.resposta;
    }

    public void setResposta(String resposta) {
        this.resposta = resposta;
    }    
}
