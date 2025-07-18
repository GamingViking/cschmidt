interface AnimatedElement {
  update: (deltaTime: number) => void;
}

class AnimationManager {
  private elements = new Set<AnimatedElement>();
  private animationId: number | null = null;
  private isRunning = false;
  private lastTime = 0;
  
  addElement(element: AnimatedElement) {
    this.elements.add(element);
    if (!this.isRunning) {
      this.start();
    }
  }
  
  removeElement(element: AnimatedElement) {
    this.elements.delete(element);
    if (this.elements.size === 0) {
      this.stop();
    }
  }
  
  private start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.animationId = requestAnimationFrame(this.animate);
  }
  
  private stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.isRunning = false;
  }
  
  private animate = (currentTime: number) => {
    const deltaTime = currentTime - this.lastTime;
    this.lastTime = currentTime;
    
    // Update all elements with delta time
    this.elements.forEach(element => element.update(deltaTime));
    
    this.animationId = requestAnimationFrame(this.animate);
  };
}

export const animationManager = new AnimationManager();