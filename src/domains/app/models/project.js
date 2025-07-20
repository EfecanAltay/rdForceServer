import BaseObject from "#shared/models/base-object.js";

class Project extends BaseObject {
    
    // Proje adı (kısa ve öz)
    Name = "";
    // Projeye dair genel açıklama
    Description = "";
    // Projenin Ar-Ge hedefi / problemi
    Objective = "";
    // Etiket listesi (örn: ışık, analiz, makine)
    Tags = [];
    // Projeyi başlatan / sorumlu kişi (FK: users.id)
    LeadUserId = undefined;
    // Projede görev alan diğer kullanıcılar (çoklu FK)
    CollaboratorIds = [];
    // Planlanan başlangıç tarihi
    StartDate = undefined;
    // Planlanan bitiş tarihi
    EndDate = undefined;
    // taslak, aktif, tamamlandı, iptal gibi durumlar
    Status = "";
    // Proje türü (örn: malzeme, yazılım, simülasyon vb.)
    Category = "";
    // Arşivlendi mi (tarihi ama silinmemiş projeler için)
    IsArchived = false;

    constructor() {
        super("app", "project");
    }
}

export default Project;