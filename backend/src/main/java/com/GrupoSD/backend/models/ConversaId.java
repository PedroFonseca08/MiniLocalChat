package com.GrupoSD.backend.models;

import java.io.Serializable;
import java.util.Objects;

public class ConversaId implements Serializable {

    private String data;
    private Integer idConversa;
    private Integer idUsuario;


    public ConversaId() {
    }

    public ConversaId(String data, Integer idConversa, Integer idUsuario) {
        this.data = data;
        this.idConversa = idConversa;
        this.idUsuario = idUsuario;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Integer getIdConversa() {
        return this.idConversa;
    }

    public void setIdConversa(Integer idConversa) {
        this.idConversa = idConversa;
    }

    public Integer getIdUsuario() {
        return this.idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public ConversaId data(String data) {
        setData(data);
        return this;
    }

    public ConversaId idConversa(Integer idConversa) {
        setIdConversa(idConversa);
        return this;
    }

    public ConversaId idUsuario(Integer idUsuario) {
        setIdUsuario(idUsuario);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof ConversaId)) {
            return false;
        }
        ConversaId conversaId = (ConversaId) o;
        return Objects.equals(data, conversaId.data) && Objects.equals(idConversa, conversaId.idConversa) && Objects.equals(idUsuario, conversaId.idUsuario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(data, idConversa, idUsuario);
    }

    @Override
    public String toString() {
        return "{" +
            " data='" + getData() + "'" +
            ", idConversa='" + getIdConversa() + "'" +
            ", idUsuario='" + getIdUsuario() + "'" +
            "}";
    }
}
