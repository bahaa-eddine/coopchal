import { contacts, blogPosts, type Contact, type InsertContact, type BlogPost, type InsertBlogPost } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  deleteBlogPost(id: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private blogPosts: Map<number, BlogPost>;
  private currentContactId: number;
  private currentBlogPostId: number;

  constructor() {
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.currentContactId = 1;
    this.currentBlogPostId = 1;
    
    // Add some sample blog posts
    this.addSampleBlogPosts();
  }

  private addSampleBlogPosts() {
    const samplePosts = [
      {
        title: "Nouveau Programme de Soutien Scolaire",
        description: "Lancement de notre nouveau programme intensif de soutien scolaire pour les élèves du collège et lycée, avec des sessions individualisées adaptées aux besoins de chaque apprenant.",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
      },
      {
        title: "Atelier d'Artisanat Traditionnel Marocain",
        description: "Une session exceptionnelle d'apprentissage des techniques artisanales traditionnelles avec des maîtres artisans locaux. Les participants découvrent les secrets de l'artisanat marocain authentique.",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
      },
      {
        title: "Cérémonie de Remise des Certificats",
        description: "Félicitations à nos 50 diplômés qui ont terminé avec succès leurs formations en alphabétisation et compétences professionnelles. Un moment de fierté pour toute notre communauté éducative.",
        imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
      }
    ];

    samplePosts.forEach(post => {
      const id = this.currentBlogPostId++;
      const blogPost: BlogPost = {
        ...post,
        id,
        createdAt: new Date(),
      };
      this.blogPosts.set(id, blogPost);
    });
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      phone: insertContact.phone || null,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const blogPost: BlogPost = {
      ...insertBlogPost,
      id,
      createdAt: new Date(),
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async deleteBlogPost(id: number): Promise<void> {
    this.blogPosts.delete(id);
  }
}

export const storage = new MemStorage();
