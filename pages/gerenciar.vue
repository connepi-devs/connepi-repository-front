<template>
  <v-container grid-list-lg>
    <div class="headline font-weight-black section-title">
      Gerenciar
    </div>
    <v-row class="fill-height" justify="start">
      <v-col cols="12">
        <v-card outlined height="100%" width="100%">
          <v-card-title class="title primary font-weight-bold white--text">
            Submeter Evento
          </v-card-title>
          <v-form ref="form" v-model="valid">
            <v-card-text class="black--text mt-5">
              <p class="title mt-5">
                Para submeter um evento siga as instruções abaixo:
              </p>
              <ol class="subtitle-1">
                <li>
                  Faça o download da planilha template
                  <a
                    class="primary--text"
                    href="@/assets/template-importacao.xlsx"
                    download
                  >
                    clicando aqui
                  </a>
                </li>
                <li>
                  Preencha a planilha com os dados do evento ao qual está
                  cadastrando
                </li>
                <li>
                  Faça upload da planilha preenchida no campo abaixo:
                  <div
                    class="mt-3"
                    :class="{
                      'upload-field': $vuetify.breakpoint.smAndUp,
                      'upload-field-xs': $vuetify.breakpoint.xs,
                    }"
                  >
                    <v-file-input
                      v-model="file"
                      style="margin-left: -24px"
                      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      outlined
                      label="Selecionar arquivo preenchido"
                      :rules="[requiredRule]"
                      clearable
                    />
                  </div>
                </li>
                <li>Clique no botão enviar para enviar os dados do evento</li>
              </ol>
            </v-card-text>
            <v-card-actions>
              <div class="flex justify-center mt-5">
                <v-btn
                  width="80%"
                  color="primary"
                  :loading="loading"
                  :disabled="!valid || loading"
                  @click="upload"
                >
                  <v-icon left>mdi-upload</v-icon>
                  {{ !loading ? 'Enviar evento' : 'Enviando evento' }}
                </v-btn>
              </div>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { requiredRule } from '@/utils/validation-rules';

export default {
  name: 'Manage',
  data() {
    return {
      file: null,
      loading: false,
      valid: false,
    };
  },
  methods: {
    requiredRule,
    upload() {
      this.loading = true;
      const formData = new FormData();
      formData.append('file', this.file);
      // console.log('upload function', formData);
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.upload-field {
  width: 30%;
}
.upload-field-xs {
  width: 100%;
}
</style>
